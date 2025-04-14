import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCohortV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCohortV1alpha1Config) {
    super(scope, id, { manifest: { apiVersion: "kueue.x-k8s.io/v1alpha1", kind: "Cohort", ...manifest }, ...config });
  }
}
export interface KubernetesCohortV1alpha1Config extends ManifestConfig {
  manifest: {
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace: string;
    };
    spec: {
      /** @description fairSharing defines the properties of the Cohort when
       *     participating in FairSharing. The values are only relevant
       *     if FairSharing is enabled in the Kueue configuration. */
      fairSharing?: {
        /** @description weight gives a comparative advantage to this ClusterQueue
         *     or Cohort when competing for unused resources in the
         *     Cohort.  The share is based on the dominant resource usage
         *     above nominal quotas for each resource, divided by the
         *     weight.  Admission prioritizes scheduling workloads from
         *     ClusterQueues and Cohorts with the lowest share and
         *     preempting workloads from the ClusterQueues and Cohorts
         *     with the highest share.  A zero weight implies infinite
         *     share value, meaning that this Node will always be at
         *     disadvantage against other ClusterQueues and Cohorts. */
        weight?: number | string;
      };
      /** @description Parent references the name of the Cohort's parent, if
       *     any. It satisfies one of three cases:
       *     1) Unset. This Cohort is the root of its Cohort tree.
       *     2) References a non-existent Cohort. We use default Cohort (no borrowing/lending limits).
       *     3) References an existent Cohort.
       *
       *     If a cycle is created, we disable all members of the
       *     Cohort, including ClusterQueues, until the cycle is
       *     removed.  We prevent further admission while the cycle
       *     exists. */
      parent?: string;
      /** @description ResourceGroups describes groupings of Resources and
       *     Flavors.  Each ResourceGroup defines a list of Resources
       *     and a list of Flavors which provide quotas for these
       *     Resources. Each Resource and each Flavor may only form part
       *     of one ResourceGroup.  There may be up to 16 ResourceGroups
       *     within a Cohort.
       *
       *     BorrowingLimit limits how much members of this Cohort
       *     subtree can borrow from the parent subtree.
       *
       *     LendingLimit limits how much members of this Cohort subtree
       *     can lend to the parent subtree.
       *
       *     Borrowing and Lending limits must only be set when the
       *     Cohort has a parent.  Otherwise, the Cohort create/update
       *     will be rejected by the webhook. */
      resourceGroups?: {
        /** @description coveredResources is the list of resources covered by the flavors in this
         *     group.
         *     Examples: cpu, memory, vendor.com/gpu.
         *     The list cannot be empty and it can contain up to 16 resources. */
        coveredResources: string[];
        /** @description flavors is the list of flavors that provide the resources of this group.
         *     Typically, different flavors represent different hardware models
         *     (e.g., gpu models, cpu architectures) or pricing models (on-demand vs spot
         *     cpus).
         *     Each flavor MUST list all the resources listed for this group in the same
         *     order as the .resources field.
         *     The list cannot be empty and it can contain up to 16 flavors. */
        flavors: {
          /** @description name of this flavor. The name should match the .metadata.name of a
           *     ResourceFlavor. If a matching ResourceFlavor does not exist, the
           *     ClusterQueue will have an Active condition set to False. */
          name: string;
          /** @description resources is the list of quotas for this flavor per resource.
           *     There could be up to 16 resources. */
          resources: {
            /** @description borrowingLimit is the maximum amount of quota for the [flavor, resource]
             *     combination that this ClusterQueue is allowed to borrow from the unused
             *     quota of other ClusterQueues in the same cohort.
             *     In total, at a given time, Workloads in a ClusterQueue can consume a
             *     quantity of quota equal to nominalQuota+borrowingLimit, assuming the other
             *     ClusterQueues in the cohort have enough unused quota.
             *     If null, it means that there is no borrowing limit.
             *     If not null, it must be non-negative.
             *     borrowingLimit must be null if spec.cohort is empty. */
            borrowingLimit?: number | string;
            /** @description lendingLimit is the maximum amount of unused quota for the [flavor, resource]
             *     combination that this ClusterQueue can lend to other ClusterQueues in the same cohort.
             *     In total, at a given time, ClusterQueue reserves for its exclusive use
             *     a quantity of quota equals to nominalQuota - lendingLimit.
             *     If null, it means that there is no lending limit, meaning that
             *     all the nominalQuota can be borrowed by other clusterQueues in the cohort.
             *     If not null, it must be non-negative.
             *     lendingLimit must be null if spec.cohort is empty.
             *     This field is in beta stage and is enabled by default. */
            lendingLimit?: number | string;
            /** @description name of this resource. */
            name: string;
            /** @description nominalQuota is the quantity of this resource that is available for
             *     Workloads admitted by this ClusterQueue at a point in time.
             *     The nominalQuota must be non-negative.
             *     nominalQuota should represent the resources in the cluster available for
             *     running jobs (after discounting resources consumed by system components
             *     and pods not managed by kueue). In an autoscaled cluster, nominalQuota
             *     should account for resources that can be provided by a component such as
             *     Kubernetes cluster-autoscaler.
             *
             *     If the ClusterQueue belongs to a cohort, the sum of the quotas for each
             *     (flavor, resource) combination defines the maximum quantity that can be
             *     allocated by a ClusterQueue in the cohort. */
            nominalQuota: number | string;
          }[];
        }[];
      }[];
    };
  };
}

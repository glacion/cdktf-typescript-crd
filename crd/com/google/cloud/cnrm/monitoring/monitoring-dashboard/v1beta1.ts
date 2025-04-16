import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMonitoringDashboardV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesMonitoringDashboardV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesMonitoringDashboardV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.cnrm.cloud.google.com/v1beta1";
    kind?: "MonitoringDashboard";
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace?: string;
    };
    spec: {
      /** @description The content is divided into equally spaced columns and the widgets are arranged vertically. */
      columnLayout?: {
        /** @description The columns of content to display. */
        columns?: {
          /**
           * Format: int64
           * @description The relative weight of this column. The column weight is used to adjust the width of columns on the screen (relative to peers).
           */
          weight?: number;
          /** @description The display widgets arranged vertically in this column. */
          widgets?: {
            /** @description A chart of alert policy data. */
            alertChart?: {
              /** @description Required. A reference to the MonitoringAlertPolicy. */
              alertPolicyRef: {
                /** @description The MonitoringAlertPolicy link in the form "projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]", when not managed by Config Connector. */
                external?: string;
                /** @description The `name` field of a `MonitoringAlertPolicy` resource. */
                name?: string;
                /** @description The `namespace` field of a `MonitoringAlertPolicy` resource. */
                namespace?: string;
              } & (unknown | unknown);
            };
            /** @description A blank space. */
            blank?: Record<string, never>;
            /** @description A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
            collapsibleGroup?: {
              /** @description The collapsed state of the widget on first page load. */
              collapsed?: boolean;
            };
            /** @description A widget that displays a list of error groups. */
            errorReportingPanel?: {
              /** @description The projects from which to gather errors. */
              projectRefs?: ({
                /** @description The `projectID` field of a project, when not managed by Config Connector. */
                external?: string;
                /** @description The kind of the Project resource; optional but must be `Project` if provided. */
                kind?: string;
                /** @description The `name` field of a `Project` resource. */
                name?: string;
                /** @description The `namespace` field of a `Project` resource. */
                namespace?: string;
              } & (unknown | unknown))[];
              /** @description An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to `version`, which can be changed whenever new code is deployed. */
              services?: string[];
              /** @description Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app. */
              versions?: string[];
            };
            /** @description Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional. */
            id?: string;
            /** @description A widget that shows list of incidents. */
            incidentList?: {
              /** @description Optional. The monitored resource for which incidents are listed. */
              monitoredResources?: {
                /** @description Required. Values for all of the labels listed in the associated monitored resource descriptor. */
                labels?: {
                  [key: string]: string;
                };
                /** @description Required. The monitored resource type. This field must match the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. */
                type?: string;
              }[];
              /** @description Optional. A list of alert policies to filter the incident list by. */
              policyRefs?: ({
                /** @description The MonitoringAlertPolicy link in the form "projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]", when not managed by Config Connector. */
                external?: string;
                /** @description The `name` field of a `MonitoringAlertPolicy` resource. */
                name?: string;
                /** @description The `namespace` field of a `MonitoringAlertPolicy` resource. */
                namespace?: string;
              } & (unknown | unknown))[];
            };
            /** @description A widget that shows a stream of logs. */
            logsPanel?: {
              /** @description A filter that chooses which log entries to return.  See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). */
              filter?: string;
              /** @description The names of logging resources to collect logs for. */
              resourceNames?: ({
                /** @description The external name of the referenced resource */
                external?: string;
                /** @description Kind of the referent. */
                kind?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown))[];
            };
            /** @description A widget that displays timeseries data as a pie chart. */
            pieChart?: {
              /** @description Required. Indicates the visualization type for the PieChart. */
              chartType: string;
              /** @description Required. The queries for the chart's data. */
              dataSets: {
                /** @description Optional. The lower bound on data point frequency for this data set. */
                minAlignmentPeriod?: string;
                /** @description Optional. A template for the name of the slice. */
                sliceNameTemplate?: string;
                /** @description Required. The query for the PieChart. See, `google.monitoring.dashboard.v1.TimeSeriesQuery`. */
                timeSeriesQuery: {
                  /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                  outputFullDuration?: boolean;
                  /** @description A query used to fetch time series with PromQL. */
                  prometheusQuery?: string;
                  /** @description Filter parameters to fetch time series. */
                  timeSeriesFilter?: {
                    /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after `aggregation` is applied. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description Parameters to fetch a ratio between two time series filters. */
                  timeSeriesFilterRatio?: {
                    /** @description The denominator of the ratio. */
                    denominator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description The numerator of the ratio. */
                    numerator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after the ratio is computed. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description A query used to fetch time series with MQL. */
                  timeSeriesQueryLanguage?: string;
                  /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                  unitOverride?: string;
                };
              }[];
              /** @description Optional. Indicates whether or not the pie chart should show slices' labels */
              showLabels?: boolean;
            };
            /** @description A scorecard summarizing time series data. */
            scorecard?: {
              /** @description Will cause the `Scorecard` to show only the value, with no indicator to its value relative to its thresholds. */
              blankView?: Record<string, never>;
              /** @description Will cause the scorecard to show a gauge chart. */
              gaugeView?: {
                /**
                 * Format: double
                 * @description The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
                 */
                lowerBound?: number;
                /**
                 * Format: double
                 * @description The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
                 */
                upperBound?: number;
              };
              /** @description Will cause the scorecard to show a spark chart. */
              sparkChartView?: {
                /** @description The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. */
                minAlignmentPeriod?: string;
                /** @description Required. The type of sparkchart to show in this chartView. */
                sparkChartType: string;
              };
              /** @description The thresholds used to determine the state of the scorecard given the time series' current value. */
              thresholds?: {
                /** @description The state color for this threshold. Color is not allowed in a XyChart. */
                color?: string;
                /** @description The direction for the current threshold. Direction is not allowed in a XyChart. */
                direction?: string;
                /** @description A label for the threshold. */
                label?: string;
                /** @description The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
                targetAxis?: string;
                /**
                 * Format: double
                 * @description The value of the threshold. The value should be defined in the native scale of the metric.
                 */
                value?: number;
              }[];
              /** @description Required. Fields for querying time series data from the Stackdriver metrics API. */
              timeSeriesQuery: {
                /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                outputFullDuration?: boolean;
                /** @description A query used to fetch time series with PromQL. */
                prometheusQuery?: string;
                /** @description Filter parameters to fetch time series. */
                timeSeriesFilter?: {
                  /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                  aggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                  /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                  filter: string;
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after `aggregation` is applied. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description Parameters to fetch a ratio between two time series filters. */
                timeSeriesFilterRatio?: {
                  /** @description The denominator of the ratio. */
                  denominator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description The numerator of the ratio. */
                  numerator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after the ratio is computed. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description A query used to fetch time series with MQL. */
                timeSeriesQueryLanguage?: string;
                /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                unitOverride?: string;
              };
            };
            /** @description A widget that defines a section header for easier navigation of the dashboard. */
            sectionHeader?: {
              /** @description Whether to insert a divider below the section in the table of contents */
              dividerBelow?: boolean;
              /** @description The subtitle of the section */
              subtitle?: string;
            };
            /** @description A widget that groups the other widgets by using a dropdown menu. */
            singleViewGroup?: Record<string, never>;
            /** @description A raw string or markdown displaying textual content. */
            text?: {
              /** @description The text content to be displayed. */
              content?: string;
              /** @description How the text content is formatted. */
              format?: string;
              /** @description How the text is styled */
              style?: {
                /** @description The background color as a hex string. "#RRGGBB" or "#RGB" */
                backgroundColor?: string;
                /** @description Font sizes for both the title and content. The title will still be larger relative to the content. */
                fontSize?: string;
                /** @description The horizontal alignment of both the title and content */
                horizontalAlignment?: string;
                /** @description The amount of padding around the widget */
                padding?: string;
                /** @description The pointer location for this widget (also sometimes called a "tail") */
                pointerLocation?: string;
                /** @description The text color as a hex string. "#RRGGBB" or "#RGB" */
                textColor?: string;
                /** @description The vertical alignment of both the title and content */
                verticalAlignment?: string;
              };
            };
            /** @description A widget that displays time series data in a tabular format. */
            timeSeriesTable?: {
              /** @description Optional. The list of the persistent column settings for the table. */
              columnSettings?: {
                /** @description Required. The id of the column. */
                column: string;
                /** @description Required. Whether the column should be visible on page load. */
                visible: boolean;
              }[];
              /** @description Required. The data displayed in this table. */
              dataSets: {
                /** @description Optional. The lower bound on data point frequency for this data set. */
                minAlignmentPeriod?: string;
                /** @description Optional. Table display options for configuring how the table is rendered. */
                tableDisplayOptions?: {
                  /** @description Optional. This field is unused and has been replaced by TimeSeriesTable.column_settings */
                  shownColumns?: string[];
                };
                /** @description Optional. A template string for naming `TimeSeries` in the resulting data set. */
                tableTemplate?: string;
                /** @description Required. Fields for querying time series data from the Stackdriver metrics API. */
                timeSeriesQuery?: {
                  /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                  outputFullDuration?: boolean;
                  /** @description A query used to fetch time series with PromQL. */
                  prometheusQuery?: string;
                  /** @description Filter parameters to fetch time series. */
                  timeSeriesFilter?: {
                    /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after `aggregation` is applied. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description Parameters to fetch a ratio between two time series filters. */
                  timeSeriesFilterRatio?: {
                    /** @description The denominator of the ratio. */
                    denominator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description The numerator of the ratio. */
                    numerator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after the ratio is computed. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description A query used to fetch time series with MQL. */
                  timeSeriesQueryLanguage?: string;
                  /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                  unitOverride?: string;
                };
              }[];
              /** @description Optional. Store rendering strategy */
              metricVisualization?: string;
            };
            /** @description Optional. The title of the widget. */
            title?: string;
            /** @description A chart of time series data. */
            xyChart?: {
              /** @description Display options for the chart. */
              chartOptions?: {
                /** @description The chart mode. */
                mode?: string;
              };
              /** @description Required. The data displayed in this chart. */
              dataSets: {
                /** @description A template string for naming `TimeSeries` in the resulting data set. */
                legendTemplate?: string;
                /** @description Optional. The lower bound on data point frequency for this data set. */
                minAlignmentPeriod?: string;
                /** @description How this data should be plotted on the chart. */
                plotType?: string;
                /** @description Optional. The target axis to use for plotting the metric. */
                targetAxis?: string;
                /** @description Fields for querying time series data from the Stackdriver metrics API. */
                timeSeriesQuery: {
                  /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                  outputFullDuration?: boolean;
                  /** @description A query used to fetch time series with PromQL. */
                  prometheusQuery?: string;
                  /** @description Filter parameters to fetch time series. */
                  timeSeriesFilter?: {
                    /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after `aggregation` is applied. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description Parameters to fetch a ratio between two time series filters. */
                  timeSeriesFilterRatio?: {
                    /** @description The denominator of the ratio. */
                    denominator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description The numerator of the ratio. */
                    numerator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after the ratio is computed. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description A query used to fetch time series with MQL. */
                  timeSeriesQueryLanguage?: string;
                  /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                  unitOverride?: string;
                };
              }[];
              /** @description Threshold lines drawn horizontally across the chart. */
              thresholds?: {
                /** @description The state color for this threshold. Color is not allowed in a XyChart. */
                color?: string;
                /** @description The direction for the current threshold. Direction is not allowed in a XyChart. */
                direction?: string;
                /** @description A label for the threshold. */
                label?: string;
                /** @description The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
                targetAxis?: string;
                /**
                 * Format: double
                 * @description The value of the threshold. The value should be defined in the native scale of the metric.
                 */
                value?: number;
              }[];
              /** @description The duration used to display a comparison chart. */
              timeshiftDuration?: string;
              /** @description The properties applied to the x-axis. */
              xAxis?: {
                /** @description The label of the axis. */
                label?: string;
                /** @description The axis scale. By default, a linear scale is used. */
                scale?: string;
              };
              /** @description The properties applied to the y2-axis. */
              y2Axis?: {
                /** @description The label of the axis. */
                label?: string;
                /** @description The axis scale. By default, a linear scale is used. */
                scale?: string;
              };
              /** @description The properties applied to the y-axis. */
              yAxis?: {
                /** @description The label of the axis. */
                label?: string;
                /** @description The axis scale. By default, a linear scale is used. */
                scale?: string;
              };
            };
          }[];
        }[];
      };
      /** @description Filters to reduce the amount of data charted based on the filter criteria. */
      dashboardFilters?: {
        /** @description The specified filter type */
        filterType?: string;
        /** @description Required. The key for the label */
        labelKey: string;
        /** @description A variable-length string value. */
        stringValue?: string;
        /** @description The placeholder text that can be referenced in a filter string or MQL query. If omitted, the dashboard filter will be applied to all relevant widgets in the dashboard. */
        templateVariable?: string;
      }[];
      /** @description Required. The mutable, human-readable name. */
      displayName: string;
      /** @description Content is arranged with a basic layout that re-flows a simple list of informational elements like widgets or tiles. */
      gridLayout?: {
        /**
         * Format: int64
         * @description The number of columns into which the view's width is divided. If omitted or set to zero, a system default will be used while rendering.
         */
        columns?: number;
        /** @description The informational elements that are arranged into the columns row-first. */
        widgets?: {
          /** @description A chart of alert policy data. */
          alertChart?: {
            /** @description Required. A reference to the MonitoringAlertPolicy. */
            alertPolicyRef: {
              /** @description The MonitoringAlertPolicy link in the form "projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]", when not managed by Config Connector. */
              external?: string;
              /** @description The `name` field of a `MonitoringAlertPolicy` resource. */
              name?: string;
              /** @description The `namespace` field of a `MonitoringAlertPolicy` resource. */
              namespace?: string;
            } & (unknown | unknown);
          };
          /** @description A blank space. */
          blank?: Record<string, never>;
          /** @description A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
          collapsibleGroup?: {
            /** @description The collapsed state of the widget on first page load. */
            collapsed?: boolean;
          };
          /** @description A widget that displays a list of error groups. */
          errorReportingPanel?: {
            /** @description The projects from which to gather errors. */
            projectRefs?: ({
              /** @description The `projectID` field of a project, when not managed by Config Connector. */
              external?: string;
              /** @description The kind of the Project resource; optional but must be `Project` if provided. */
              kind?: string;
              /** @description The `name` field of a `Project` resource. */
              name?: string;
              /** @description The `namespace` field of a `Project` resource. */
              namespace?: string;
            } & (unknown | unknown))[];
            /** @description An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to `version`, which can be changed whenever new code is deployed. */
            services?: string[];
            /** @description Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app. */
            versions?: string[];
          };
          /** @description Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional. */
          id?: string;
          /** @description A widget that shows list of incidents. */
          incidentList?: {
            /** @description Optional. The monitored resource for which incidents are listed. */
            monitoredResources?: {
              /** @description Required. Values for all of the labels listed in the associated monitored resource descriptor. */
              labels?: {
                [key: string]: string;
              };
              /** @description Required. The monitored resource type. This field must match the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. */
              type?: string;
            }[];
            /** @description Optional. A list of alert policies to filter the incident list by. */
            policyRefs?: ({
              /** @description The MonitoringAlertPolicy link in the form "projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]", when not managed by Config Connector. */
              external?: string;
              /** @description The `name` field of a `MonitoringAlertPolicy` resource. */
              name?: string;
              /** @description The `namespace` field of a `MonitoringAlertPolicy` resource. */
              namespace?: string;
            } & (unknown | unknown))[];
          };
          /** @description A widget that shows a stream of logs. */
          logsPanel?: {
            /** @description A filter that chooses which log entries to return.  See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). */
            filter?: string;
            /** @description The names of logging resources to collect logs for. */
            resourceNames?: ({
              /** @description The external name of the referenced resource */
              external?: string;
              /** @description Kind of the referent. */
              kind?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown))[];
          };
          /** @description A widget that displays timeseries data as a pie chart. */
          pieChart?: {
            /** @description Required. Indicates the visualization type for the PieChart. */
            chartType: string;
            /** @description Required. The queries for the chart's data. */
            dataSets: {
              /** @description Optional. The lower bound on data point frequency for this data set. */
              minAlignmentPeriod?: string;
              /** @description Optional. A template for the name of the slice. */
              sliceNameTemplate?: string;
              /** @description Required. The query for the PieChart. See, `google.monitoring.dashboard.v1.TimeSeriesQuery`. */
              timeSeriesQuery: {
                /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                outputFullDuration?: boolean;
                /** @description A query used to fetch time series with PromQL. */
                prometheusQuery?: string;
                /** @description Filter parameters to fetch time series. */
                timeSeriesFilter?: {
                  /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                  aggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                  /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                  filter: string;
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after `aggregation` is applied. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description Parameters to fetch a ratio between two time series filters. */
                timeSeriesFilterRatio?: {
                  /** @description The denominator of the ratio. */
                  denominator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description The numerator of the ratio. */
                  numerator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after the ratio is computed. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description A query used to fetch time series with MQL. */
                timeSeriesQueryLanguage?: string;
                /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                unitOverride?: string;
              };
            }[];
            /** @description Optional. Indicates whether or not the pie chart should show slices' labels */
            showLabels?: boolean;
          };
          /** @description A scorecard summarizing time series data. */
          scorecard?: {
            /** @description Will cause the `Scorecard` to show only the value, with no indicator to its value relative to its thresholds. */
            blankView?: Record<string, never>;
            /** @description Will cause the scorecard to show a gauge chart. */
            gaugeView?: {
              /**
               * Format: double
               * @description The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
               */
              lowerBound?: number;
              /**
               * Format: double
               * @description The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
               */
              upperBound?: number;
            };
            /** @description Will cause the scorecard to show a spark chart. */
            sparkChartView?: {
              /** @description The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. */
              minAlignmentPeriod?: string;
              /** @description Required. The type of sparkchart to show in this chartView. */
              sparkChartType: string;
            };
            /** @description The thresholds used to determine the state of the scorecard given the time series' current value. */
            thresholds?: {
              /** @description The state color for this threshold. Color is not allowed in a XyChart. */
              color?: string;
              /** @description The direction for the current threshold. Direction is not allowed in a XyChart. */
              direction?: string;
              /** @description A label for the threshold. */
              label?: string;
              /** @description The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
              targetAxis?: string;
              /**
               * Format: double
               * @description The value of the threshold. The value should be defined in the native scale of the metric.
               */
              value?: number;
            }[];
            /** @description Required. Fields for querying time series data from the Stackdriver metrics API. */
            timeSeriesQuery: {
              /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
              outputFullDuration?: boolean;
              /** @description A query used to fetch time series with PromQL. */
              prometheusQuery?: string;
              /** @description Filter parameters to fetch time series. */
              timeSeriesFilter?: {
                /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                aggregation?: {
                  /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                  alignmentPeriod?: string;
                  /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                  crossSeriesReducer?: string;
                  /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                  groupByFields?: string[];
                  /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                  perSeriesAligner?: string;
                };
                /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                filter: string;
                /** @description Ranking based time series filter. */
                pickTimeSeriesFilter?: {
                  /** @description How to use the ranking to select time series that pass through the filter. */
                  direction?: string;
                  /**
                   * Format: int32
                   * @description How many time series to allow to pass through the filter.
                   */
                  numTimeSeries?: number;
                  /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                  rankingMethod?: string;
                };
                /** @description Apply a second aggregation after `aggregation` is applied. */
                secondaryAggregation?: {
                  /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                  alignmentPeriod?: string;
                  /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                  crossSeriesReducer?: string;
                  /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                  groupByFields?: string[];
                  /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                  perSeriesAligner?: string;
                };
              };
              /** @description Parameters to fetch a ratio between two time series filters. */
              timeSeriesFilterRatio?: {
                /** @description The denominator of the ratio. */
                denominator?: {
                  /** @description By default, the raw time series data is returned. */
                  aggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                  /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                  filter: string;
                };
                /** @description The numerator of the ratio. */
                numerator?: {
                  /** @description By default, the raw time series data is returned. */
                  aggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                  /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                  filter: string;
                };
                /** @description Ranking based time series filter. */
                pickTimeSeriesFilter?: {
                  /** @description How to use the ranking to select time series that pass through the filter. */
                  direction?: string;
                  /**
                   * Format: int32
                   * @description How many time series to allow to pass through the filter.
                   */
                  numTimeSeries?: number;
                  /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                  rankingMethod?: string;
                };
                /** @description Apply a second aggregation after the ratio is computed. */
                secondaryAggregation?: {
                  /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                  alignmentPeriod?: string;
                  /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                  crossSeriesReducer?: string;
                  /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                  groupByFields?: string[];
                  /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                  perSeriesAligner?: string;
                };
              };
              /** @description A query used to fetch time series with MQL. */
              timeSeriesQueryLanguage?: string;
              /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
              unitOverride?: string;
            };
          };
          /** @description A widget that defines a section header for easier navigation of the dashboard. */
          sectionHeader?: {
            /** @description Whether to insert a divider below the section in the table of contents */
            dividerBelow?: boolean;
            /** @description The subtitle of the section */
            subtitle?: string;
          };
          /** @description A widget that groups the other widgets by using a dropdown menu. */
          singleViewGroup?: Record<string, never>;
          /** @description A raw string or markdown displaying textual content. */
          text?: {
            /** @description The text content to be displayed. */
            content?: string;
            /** @description How the text content is formatted. */
            format?: string;
            /** @description How the text is styled */
            style?: {
              /** @description The background color as a hex string. "#RRGGBB" or "#RGB" */
              backgroundColor?: string;
              /** @description Font sizes for both the title and content. The title will still be larger relative to the content. */
              fontSize?: string;
              /** @description The horizontal alignment of both the title and content */
              horizontalAlignment?: string;
              /** @description The amount of padding around the widget */
              padding?: string;
              /** @description The pointer location for this widget (also sometimes called a "tail") */
              pointerLocation?: string;
              /** @description The text color as a hex string. "#RRGGBB" or "#RGB" */
              textColor?: string;
              /** @description The vertical alignment of both the title and content */
              verticalAlignment?: string;
            };
          };
          /** @description A widget that displays time series data in a tabular format. */
          timeSeriesTable?: {
            /** @description Optional. The list of the persistent column settings for the table. */
            columnSettings?: {
              /** @description Required. The id of the column. */
              column: string;
              /** @description Required. Whether the column should be visible on page load. */
              visible: boolean;
            }[];
            /** @description Required. The data displayed in this table. */
            dataSets: {
              /** @description Optional. The lower bound on data point frequency for this data set. */
              minAlignmentPeriod?: string;
              /** @description Optional. Table display options for configuring how the table is rendered. */
              tableDisplayOptions?: {
                /** @description Optional. This field is unused and has been replaced by TimeSeriesTable.column_settings */
                shownColumns?: string[];
              };
              /** @description Optional. A template string for naming `TimeSeries` in the resulting data set. */
              tableTemplate?: string;
              /** @description Required. Fields for querying time series data from the Stackdriver metrics API. */
              timeSeriesQuery?: {
                /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                outputFullDuration?: boolean;
                /** @description A query used to fetch time series with PromQL. */
                prometheusQuery?: string;
                /** @description Filter parameters to fetch time series. */
                timeSeriesFilter?: {
                  /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                  aggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                  /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                  filter: string;
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after `aggregation` is applied. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description Parameters to fetch a ratio between two time series filters. */
                timeSeriesFilterRatio?: {
                  /** @description The denominator of the ratio. */
                  denominator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description The numerator of the ratio. */
                  numerator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after the ratio is computed. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description A query used to fetch time series with MQL. */
                timeSeriesQueryLanguage?: string;
                /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                unitOverride?: string;
              };
            }[];
            /** @description Optional. Store rendering strategy */
            metricVisualization?: string;
          };
          /** @description Optional. The title of the widget. */
          title?: string;
          /** @description A chart of time series data. */
          xyChart?: {
            /** @description Display options for the chart. */
            chartOptions?: {
              /** @description The chart mode. */
              mode?: string;
            };
            /** @description Required. The data displayed in this chart. */
            dataSets: {
              /** @description A template string for naming `TimeSeries` in the resulting data set. */
              legendTemplate?: string;
              /** @description Optional. The lower bound on data point frequency for this data set. */
              minAlignmentPeriod?: string;
              /** @description How this data should be plotted on the chart. */
              plotType?: string;
              /** @description Optional. The target axis to use for plotting the metric. */
              targetAxis?: string;
              /** @description Fields for querying time series data from the Stackdriver metrics API. */
              timeSeriesQuery: {
                /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                outputFullDuration?: boolean;
                /** @description A query used to fetch time series with PromQL. */
                prometheusQuery?: string;
                /** @description Filter parameters to fetch time series. */
                timeSeriesFilter?: {
                  /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                  aggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                  /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                  filter: string;
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after `aggregation` is applied. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description Parameters to fetch a ratio between two time series filters. */
                timeSeriesFilterRatio?: {
                  /** @description The denominator of the ratio. */
                  denominator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description The numerator of the ratio. */
                  numerator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after the ratio is computed. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description A query used to fetch time series with MQL. */
                timeSeriesQueryLanguage?: string;
                /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                unitOverride?: string;
              };
            }[];
            /** @description Threshold lines drawn horizontally across the chart. */
            thresholds?: {
              /** @description The state color for this threshold. Color is not allowed in a XyChart. */
              color?: string;
              /** @description The direction for the current threshold. Direction is not allowed in a XyChart. */
              direction?: string;
              /** @description A label for the threshold. */
              label?: string;
              /** @description The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
              targetAxis?: string;
              /**
               * Format: double
               * @description The value of the threshold. The value should be defined in the native scale of the metric.
               */
              value?: number;
            }[];
            /** @description The duration used to display a comparison chart. */
            timeshiftDuration?: string;
            /** @description The properties applied to the x-axis. */
            xAxis?: {
              /** @description The label of the axis. */
              label?: string;
              /** @description The axis scale. By default, a linear scale is used. */
              scale?: string;
            };
            /** @description The properties applied to the y2-axis. */
            y2Axis?: {
              /** @description The label of the axis. */
              label?: string;
              /** @description The axis scale. By default, a linear scale is used. */
              scale?: string;
            };
            /** @description The properties applied to the y-axis. */
            yAxis?: {
              /** @description The label of the axis. */
              label?: string;
              /** @description The axis scale. By default, a linear scale is used. */
              scale?: string;
            };
          };
        }[];
      };
      /** @description The content is arranged as a grid of tiles, with each content widget occupying one or more grid blocks. */
      mosaicLayout?: {
        /**
         * Format: int32
         * @description The number of columns in the mosaic grid. The number of columns must be between 1 and 12, inclusive.
         */
        columns?: number;
        /** @description The tiles to display. */
        tiles?: {
          /**
           * Format: int32
           * @description The height of the tile, measured in grid blocks. Tiles must have a minimum height of 1.
           */
          height?: number;
          /** @description The informational widget contained in the tile. For example an `XyChart`. */
          widget?: {
            /** @description A chart of alert policy data. */
            alertChart?: {
              /** @description Required. A reference to the MonitoringAlertPolicy. */
              alertPolicyRef: {
                /** @description The MonitoringAlertPolicy link in the form "projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]", when not managed by Config Connector. */
                external?: string;
                /** @description The `name` field of a `MonitoringAlertPolicy` resource. */
                name?: string;
                /** @description The `namespace` field of a `MonitoringAlertPolicy` resource. */
                namespace?: string;
              } & (unknown | unknown);
            };
            /** @description A blank space. */
            blank?: Record<string, never>;
            /** @description A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
            collapsibleGroup?: {
              /** @description The collapsed state of the widget on first page load. */
              collapsed?: boolean;
            };
            /** @description A widget that displays a list of error groups. */
            errorReportingPanel?: {
              /** @description The projects from which to gather errors. */
              projectRefs?: ({
                /** @description The `projectID` field of a project, when not managed by Config Connector. */
                external?: string;
                /** @description The kind of the Project resource; optional but must be `Project` if provided. */
                kind?: string;
                /** @description The `name` field of a `Project` resource. */
                name?: string;
                /** @description The `namespace` field of a `Project` resource. */
                namespace?: string;
              } & (unknown | unknown))[];
              /** @description An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to `version`, which can be changed whenever new code is deployed. */
              services?: string[];
              /** @description Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app. */
              versions?: string[];
            };
            /** @description Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional. */
            id?: string;
            /** @description A widget that shows list of incidents. */
            incidentList?: {
              /** @description Optional. The monitored resource for which incidents are listed. */
              monitoredResources?: {
                /** @description Required. Values for all of the labels listed in the associated monitored resource descriptor. */
                labels?: {
                  [key: string]: string;
                };
                /** @description Required. The monitored resource type. This field must match the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. */
                type?: string;
              }[];
              /** @description Optional. A list of alert policies to filter the incident list by. */
              policyRefs?: ({
                /** @description The MonitoringAlertPolicy link in the form "projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]", when not managed by Config Connector. */
                external?: string;
                /** @description The `name` field of a `MonitoringAlertPolicy` resource. */
                name?: string;
                /** @description The `namespace` field of a `MonitoringAlertPolicy` resource. */
                namespace?: string;
              } & (unknown | unknown))[];
            };
            /** @description A widget that shows a stream of logs. */
            logsPanel?: {
              /** @description A filter that chooses which log entries to return.  See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). */
              filter?: string;
              /** @description The names of logging resources to collect logs for. */
              resourceNames?: ({
                /** @description The external name of the referenced resource */
                external?: string;
                /** @description Kind of the referent. */
                kind?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown))[];
            };
            /** @description A widget that displays timeseries data as a pie chart. */
            pieChart?: {
              /** @description Required. Indicates the visualization type for the PieChart. */
              chartType: string;
              /** @description Required. The queries for the chart's data. */
              dataSets: {
                /** @description Optional. The lower bound on data point frequency for this data set. */
                minAlignmentPeriod?: string;
                /** @description Optional. A template for the name of the slice. */
                sliceNameTemplate?: string;
                /** @description Required. The query for the PieChart. See, `google.monitoring.dashboard.v1.TimeSeriesQuery`. */
                timeSeriesQuery: {
                  /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                  outputFullDuration?: boolean;
                  /** @description A query used to fetch time series with PromQL. */
                  prometheusQuery?: string;
                  /** @description Filter parameters to fetch time series. */
                  timeSeriesFilter?: {
                    /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after `aggregation` is applied. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description Parameters to fetch a ratio between two time series filters. */
                  timeSeriesFilterRatio?: {
                    /** @description The denominator of the ratio. */
                    denominator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description The numerator of the ratio. */
                    numerator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after the ratio is computed. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description A query used to fetch time series with MQL. */
                  timeSeriesQueryLanguage?: string;
                  /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                  unitOverride?: string;
                };
              }[];
              /** @description Optional. Indicates whether or not the pie chart should show slices' labels */
              showLabels?: boolean;
            };
            /** @description A scorecard summarizing time series data. */
            scorecard?: {
              /** @description Will cause the `Scorecard` to show only the value, with no indicator to its value relative to its thresholds. */
              blankView?: Record<string, never>;
              /** @description Will cause the scorecard to show a gauge chart. */
              gaugeView?: {
                /**
                 * Format: double
                 * @description The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
                 */
                lowerBound?: number;
                /**
                 * Format: double
                 * @description The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
                 */
                upperBound?: number;
              };
              /** @description Will cause the scorecard to show a spark chart. */
              sparkChartView?: {
                /** @description The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. */
                minAlignmentPeriod?: string;
                /** @description Required. The type of sparkchart to show in this chartView. */
                sparkChartType: string;
              };
              /** @description The thresholds used to determine the state of the scorecard given the time series' current value. */
              thresholds?: {
                /** @description The state color for this threshold. Color is not allowed in a XyChart. */
                color?: string;
                /** @description The direction for the current threshold. Direction is not allowed in a XyChart. */
                direction?: string;
                /** @description A label for the threshold. */
                label?: string;
                /** @description The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
                targetAxis?: string;
                /**
                 * Format: double
                 * @description The value of the threshold. The value should be defined in the native scale of the metric.
                 */
                value?: number;
              }[];
              /** @description Required. Fields for querying time series data from the Stackdriver metrics API. */
              timeSeriesQuery: {
                /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                outputFullDuration?: boolean;
                /** @description A query used to fetch time series with PromQL. */
                prometheusQuery?: string;
                /** @description Filter parameters to fetch time series. */
                timeSeriesFilter?: {
                  /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                  aggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                  /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                  filter: string;
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after `aggregation` is applied. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description Parameters to fetch a ratio between two time series filters. */
                timeSeriesFilterRatio?: {
                  /** @description The denominator of the ratio. */
                  denominator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description The numerator of the ratio. */
                  numerator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after the ratio is computed. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description A query used to fetch time series with MQL. */
                timeSeriesQueryLanguage?: string;
                /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                unitOverride?: string;
              };
            };
            /** @description A widget that defines a section header for easier navigation of the dashboard. */
            sectionHeader?: {
              /** @description Whether to insert a divider below the section in the table of contents */
              dividerBelow?: boolean;
              /** @description The subtitle of the section */
              subtitle?: string;
            };
            /** @description A widget that groups the other widgets by using a dropdown menu. */
            singleViewGroup?: Record<string, never>;
            /** @description A raw string or markdown displaying textual content. */
            text?: {
              /** @description The text content to be displayed. */
              content?: string;
              /** @description How the text content is formatted. */
              format?: string;
              /** @description How the text is styled */
              style?: {
                /** @description The background color as a hex string. "#RRGGBB" or "#RGB" */
                backgroundColor?: string;
                /** @description Font sizes for both the title and content. The title will still be larger relative to the content. */
                fontSize?: string;
                /** @description The horizontal alignment of both the title and content */
                horizontalAlignment?: string;
                /** @description The amount of padding around the widget */
                padding?: string;
                /** @description The pointer location for this widget (also sometimes called a "tail") */
                pointerLocation?: string;
                /** @description The text color as a hex string. "#RRGGBB" or "#RGB" */
                textColor?: string;
                /** @description The vertical alignment of both the title and content */
                verticalAlignment?: string;
              };
            };
            /** @description A widget that displays time series data in a tabular format. */
            timeSeriesTable?: {
              /** @description Optional. The list of the persistent column settings for the table. */
              columnSettings?: {
                /** @description Required. The id of the column. */
                column: string;
                /** @description Required. Whether the column should be visible on page load. */
                visible: boolean;
              }[];
              /** @description Required. The data displayed in this table. */
              dataSets: {
                /** @description Optional. The lower bound on data point frequency for this data set. */
                minAlignmentPeriod?: string;
                /** @description Optional. Table display options for configuring how the table is rendered. */
                tableDisplayOptions?: {
                  /** @description Optional. This field is unused and has been replaced by TimeSeriesTable.column_settings */
                  shownColumns?: string[];
                };
                /** @description Optional. A template string for naming `TimeSeries` in the resulting data set. */
                tableTemplate?: string;
                /** @description Required. Fields for querying time series data from the Stackdriver metrics API. */
                timeSeriesQuery?: {
                  /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                  outputFullDuration?: boolean;
                  /** @description A query used to fetch time series with PromQL. */
                  prometheusQuery?: string;
                  /** @description Filter parameters to fetch time series. */
                  timeSeriesFilter?: {
                    /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after `aggregation` is applied. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description Parameters to fetch a ratio between two time series filters. */
                  timeSeriesFilterRatio?: {
                    /** @description The denominator of the ratio. */
                    denominator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description The numerator of the ratio. */
                    numerator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after the ratio is computed. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description A query used to fetch time series with MQL. */
                  timeSeriesQueryLanguage?: string;
                  /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                  unitOverride?: string;
                };
              }[];
              /** @description Optional. Store rendering strategy */
              metricVisualization?: string;
            };
            /** @description Optional. The title of the widget. */
            title?: string;
            /** @description A chart of time series data. */
            xyChart?: {
              /** @description Display options for the chart. */
              chartOptions?: {
                /** @description The chart mode. */
                mode?: string;
              };
              /** @description Required. The data displayed in this chart. */
              dataSets: {
                /** @description A template string for naming `TimeSeries` in the resulting data set. */
                legendTemplate?: string;
                /** @description Optional. The lower bound on data point frequency for this data set. */
                minAlignmentPeriod?: string;
                /** @description How this data should be plotted on the chart. */
                plotType?: string;
                /** @description Optional. The target axis to use for plotting the metric. */
                targetAxis?: string;
                /** @description Fields for querying time series data from the Stackdriver metrics API. */
                timeSeriesQuery: {
                  /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                  outputFullDuration?: boolean;
                  /** @description A query used to fetch time series with PromQL. */
                  prometheusQuery?: string;
                  /** @description Filter parameters to fetch time series. */
                  timeSeriesFilter?: {
                    /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after `aggregation` is applied. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description Parameters to fetch a ratio between two time series filters. */
                  timeSeriesFilterRatio?: {
                    /** @description The denominator of the ratio. */
                    denominator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description The numerator of the ratio. */
                    numerator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after the ratio is computed. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description A query used to fetch time series with MQL. */
                  timeSeriesQueryLanguage?: string;
                  /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                  unitOverride?: string;
                };
              }[];
              /** @description Threshold lines drawn horizontally across the chart. */
              thresholds?: {
                /** @description The state color for this threshold. Color is not allowed in a XyChart. */
                color?: string;
                /** @description The direction for the current threshold. Direction is not allowed in a XyChart. */
                direction?: string;
                /** @description A label for the threshold. */
                label?: string;
                /** @description The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
                targetAxis?: string;
                /**
                 * Format: double
                 * @description The value of the threshold. The value should be defined in the native scale of the metric.
                 */
                value?: number;
              }[];
              /** @description The duration used to display a comparison chart. */
              timeshiftDuration?: string;
              /** @description The properties applied to the x-axis. */
              xAxis?: {
                /** @description The label of the axis. */
                label?: string;
                /** @description The axis scale. By default, a linear scale is used. */
                scale?: string;
              };
              /** @description The properties applied to the y2-axis. */
              y2Axis?: {
                /** @description The label of the axis. */
                label?: string;
                /** @description The axis scale. By default, a linear scale is used. */
                scale?: string;
              };
              /** @description The properties applied to the y-axis. */
              yAxis?: {
                /** @description The label of the axis. */
                label?: string;
                /** @description The axis scale. By default, a linear scale is used. */
                scale?: string;
              };
            };
          };
          /**
           * Format: int32
           * @description The width of the tile, measured in grid blocks. Tiles must have a minimum width of 1.
           */
          width?: number;
          /**
           * Format: int32
           * @description The zero-indexed position of the tile in grid blocks relative to the left edge of the grid. Tiles must be contained within the specified number of columns. `x_pos` cannot be negative.
           */
          xPos?: number;
          /**
           * Format: int32
           * @description The zero-indexed position of the tile in grid blocks relative to the top edge of the grid. `y_pos` cannot be negative.
           */
          yPos?: number;
        }[];
      };
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. */
      resourceID?: string;
      /** @description The content is divided into equally spaced rows and the widgets are arranged horizontally. */
      rowLayout?: {
        /** @description The rows of content to display. */
        rows?: {
          /**
           * Format: int64
           * @description The relative weight of this row. The row weight is used to adjust the height of rows on the screen (relative to peers).
           */
          weight?: number;
          /** @description The display widgets arranged horizontally in this row. */
          widgets?: {
            /** @description A chart of alert policy data. */
            alertChart?: {
              /** @description Required. A reference to the MonitoringAlertPolicy. */
              alertPolicyRef: {
                /** @description The MonitoringAlertPolicy link in the form "projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]", when not managed by Config Connector. */
                external?: string;
                /** @description The `name` field of a `MonitoringAlertPolicy` resource. */
                name?: string;
                /** @description The `namespace` field of a `MonitoringAlertPolicy` resource. */
                namespace?: string;
              } & (unknown | unknown);
            };
            /** @description A blank space. */
            blank?: Record<string, never>;
            /** @description A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
            collapsibleGroup?: {
              /** @description The collapsed state of the widget on first page load. */
              collapsed?: boolean;
            };
            /** @description A widget that displays a list of error groups. */
            errorReportingPanel?: {
              /** @description The projects from which to gather errors. */
              projectRefs?: ({
                /** @description The `projectID` field of a project, when not managed by Config Connector. */
                external?: string;
                /** @description The kind of the Project resource; optional but must be `Project` if provided. */
                kind?: string;
                /** @description The `name` field of a `Project` resource. */
                name?: string;
                /** @description The `namespace` field of a `Project` resource. */
                namespace?: string;
              } & (unknown | unknown))[];
              /** @description An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to `version`, which can be changed whenever new code is deployed. */
              services?: string[];
              /** @description Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app. */
              versions?: string[];
            };
            /** @description Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional. */
            id?: string;
            /** @description A widget that shows list of incidents. */
            incidentList?: {
              /** @description Optional. The monitored resource for which incidents are listed. */
              monitoredResources?: {
                /** @description Required. Values for all of the labels listed in the associated monitored resource descriptor. */
                labels?: {
                  [key: string]: string;
                };
                /** @description Required. The monitored resource type. This field must match the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. */
                type?: string;
              }[];
              /** @description Optional. A list of alert policies to filter the incident list by. */
              policyRefs?: ({
                /** @description The MonitoringAlertPolicy link in the form "projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]", when not managed by Config Connector. */
                external?: string;
                /** @description The `name` field of a `MonitoringAlertPolicy` resource. */
                name?: string;
                /** @description The `namespace` field of a `MonitoringAlertPolicy` resource. */
                namespace?: string;
              } & (unknown | unknown))[];
            };
            /** @description A widget that shows a stream of logs. */
            logsPanel?: {
              /** @description A filter that chooses which log entries to return.  See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). */
              filter?: string;
              /** @description The names of logging resources to collect logs for. */
              resourceNames?: ({
                /** @description The external name of the referenced resource */
                external?: string;
                /** @description Kind of the referent. */
                kind?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown))[];
            };
            /** @description A widget that displays timeseries data as a pie chart. */
            pieChart?: {
              /** @description Required. Indicates the visualization type for the PieChart. */
              chartType: string;
              /** @description Required. The queries for the chart's data. */
              dataSets: {
                /** @description Optional. The lower bound on data point frequency for this data set. */
                minAlignmentPeriod?: string;
                /** @description Optional. A template for the name of the slice. */
                sliceNameTemplate?: string;
                /** @description Required. The query for the PieChart. See, `google.monitoring.dashboard.v1.TimeSeriesQuery`. */
                timeSeriesQuery: {
                  /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                  outputFullDuration?: boolean;
                  /** @description A query used to fetch time series with PromQL. */
                  prometheusQuery?: string;
                  /** @description Filter parameters to fetch time series. */
                  timeSeriesFilter?: {
                    /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after `aggregation` is applied. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description Parameters to fetch a ratio between two time series filters. */
                  timeSeriesFilterRatio?: {
                    /** @description The denominator of the ratio. */
                    denominator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description The numerator of the ratio. */
                    numerator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after the ratio is computed. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description A query used to fetch time series with MQL. */
                  timeSeriesQueryLanguage?: string;
                  /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                  unitOverride?: string;
                };
              }[];
              /** @description Optional. Indicates whether or not the pie chart should show slices' labels */
              showLabels?: boolean;
            };
            /** @description A scorecard summarizing time series data. */
            scorecard?: {
              /** @description Will cause the `Scorecard` to show only the value, with no indicator to its value relative to its thresholds. */
              blankView?: Record<string, never>;
              /** @description Will cause the scorecard to show a gauge chart. */
              gaugeView?: {
                /**
                 * Format: double
                 * @description The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
                 */
                lowerBound?: number;
                /**
                 * Format: double
                 * @description The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
                 */
                upperBound?: number;
              };
              /** @description Will cause the scorecard to show a spark chart. */
              sparkChartView?: {
                /** @description The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. */
                minAlignmentPeriod?: string;
                /** @description Required. The type of sparkchart to show in this chartView. */
                sparkChartType: string;
              };
              /** @description The thresholds used to determine the state of the scorecard given the time series' current value. */
              thresholds?: {
                /** @description The state color for this threshold. Color is not allowed in a XyChart. */
                color?: string;
                /** @description The direction for the current threshold. Direction is not allowed in a XyChart. */
                direction?: string;
                /** @description A label for the threshold. */
                label?: string;
                /** @description The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
                targetAxis?: string;
                /**
                 * Format: double
                 * @description The value of the threshold. The value should be defined in the native scale of the metric.
                 */
                value?: number;
              }[];
              /** @description Required. Fields for querying time series data from the Stackdriver metrics API. */
              timeSeriesQuery: {
                /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                outputFullDuration?: boolean;
                /** @description A query used to fetch time series with PromQL. */
                prometheusQuery?: string;
                /** @description Filter parameters to fetch time series. */
                timeSeriesFilter?: {
                  /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                  aggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                  /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                  filter: string;
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after `aggregation` is applied. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description Parameters to fetch a ratio between two time series filters. */
                timeSeriesFilterRatio?: {
                  /** @description The denominator of the ratio. */
                  denominator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description The numerator of the ratio. */
                  numerator?: {
                    /** @description By default, the raw time series data is returned. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                  };
                  /** @description Ranking based time series filter. */
                  pickTimeSeriesFilter?: {
                    /** @description How to use the ranking to select time series that pass through the filter. */
                    direction?: string;
                    /**
                     * Format: int32
                     * @description How many time series to allow to pass through the filter.
                     */
                    numTimeSeries?: number;
                    /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                    rankingMethod?: string;
                  };
                  /** @description Apply a second aggregation after the ratio is computed. */
                  secondaryAggregation?: {
                    /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                    alignmentPeriod?: string;
                    /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                    crossSeriesReducer?: string;
                    /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                    groupByFields?: string[];
                    /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                    perSeriesAligner?: string;
                  };
                };
                /** @description A query used to fetch time series with MQL. */
                timeSeriesQueryLanguage?: string;
                /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                unitOverride?: string;
              };
            };
            /** @description A widget that defines a section header for easier navigation of the dashboard. */
            sectionHeader?: {
              /** @description Whether to insert a divider below the section in the table of contents */
              dividerBelow?: boolean;
              /** @description The subtitle of the section */
              subtitle?: string;
            };
            /** @description A widget that groups the other widgets by using a dropdown menu. */
            singleViewGroup?: Record<string, never>;
            /** @description A raw string or markdown displaying textual content. */
            text?: {
              /** @description The text content to be displayed. */
              content?: string;
              /** @description How the text content is formatted. */
              format?: string;
              /** @description How the text is styled */
              style?: {
                /** @description The background color as a hex string. "#RRGGBB" or "#RGB" */
                backgroundColor?: string;
                /** @description Font sizes for both the title and content. The title will still be larger relative to the content. */
                fontSize?: string;
                /** @description The horizontal alignment of both the title and content */
                horizontalAlignment?: string;
                /** @description The amount of padding around the widget */
                padding?: string;
                /** @description The pointer location for this widget (also sometimes called a "tail") */
                pointerLocation?: string;
                /** @description The text color as a hex string. "#RRGGBB" or "#RGB" */
                textColor?: string;
                /** @description The vertical alignment of both the title and content */
                verticalAlignment?: string;
              };
            };
            /** @description A widget that displays time series data in a tabular format. */
            timeSeriesTable?: {
              /** @description Optional. The list of the persistent column settings for the table. */
              columnSettings?: {
                /** @description Required. The id of the column. */
                column: string;
                /** @description Required. Whether the column should be visible on page load. */
                visible: boolean;
              }[];
              /** @description Required. The data displayed in this table. */
              dataSets: {
                /** @description Optional. The lower bound on data point frequency for this data set. */
                minAlignmentPeriod?: string;
                /** @description Optional. Table display options for configuring how the table is rendered. */
                tableDisplayOptions?: {
                  /** @description Optional. This field is unused and has been replaced by TimeSeriesTable.column_settings */
                  shownColumns?: string[];
                };
                /** @description Optional. A template string for naming `TimeSeries` in the resulting data set. */
                tableTemplate?: string;
                /** @description Required. Fields for querying time series data from the Stackdriver metrics API. */
                timeSeriesQuery?: {
                  /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                  outputFullDuration?: boolean;
                  /** @description A query used to fetch time series with PromQL. */
                  prometheusQuery?: string;
                  /** @description Filter parameters to fetch time series. */
                  timeSeriesFilter?: {
                    /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after `aggregation` is applied. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description Parameters to fetch a ratio between two time series filters. */
                  timeSeriesFilterRatio?: {
                    /** @description The denominator of the ratio. */
                    denominator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description The numerator of the ratio. */
                    numerator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after the ratio is computed. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description A query used to fetch time series with MQL. */
                  timeSeriesQueryLanguage?: string;
                  /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                  unitOverride?: string;
                };
              }[];
              /** @description Optional. Store rendering strategy */
              metricVisualization?: string;
            };
            /** @description Optional. The title of the widget. */
            title?: string;
            /** @description A chart of time series data. */
            xyChart?: {
              /** @description Display options for the chart. */
              chartOptions?: {
                /** @description The chart mode. */
                mode?: string;
              };
              /** @description Required. The data displayed in this chart. */
              dataSets: {
                /** @description A template string for naming `TimeSeries` in the resulting data set. */
                legendTemplate?: string;
                /** @description Optional. The lower bound on data point frequency for this data set. */
                minAlignmentPeriod?: string;
                /** @description How this data should be plotted on the chart. */
                plotType?: string;
                /** @description Optional. The target axis to use for plotting the metric. */
                targetAxis?: string;
                /** @description Fields for querying time series data from the Stackdriver metrics API. */
                timeSeriesQuery: {
                  /** @description Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value. */
                  outputFullDuration?: boolean;
                  /** @description A query used to fetch time series with PromQL. */
                  prometheusQuery?: string;
                  /** @description Filter parameters to fetch time series. */
                  timeSeriesFilter?: {
                    /** @description By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
                    aggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                    /** @description Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                    filter: string;
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after `aggregation` is applied. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description Parameters to fetch a ratio between two time series filters. */
                  timeSeriesFilterRatio?: {
                    /** @description The denominator of the ratio. */
                    denominator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description The numerator of the ratio. */
                    numerator?: {
                      /** @description By default, the raw time series data is returned. */
                      aggregation?: {
                        /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                        alignmentPeriod?: string;
                        /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                        crossSeriesReducer?: string;
                        /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                        groupByFields?: string[];
                        /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                        perSeriesAligner?: string;
                      };
                      /** @description The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
                      filter: string;
                    };
                    /** @description Ranking based time series filter. */
                    pickTimeSeriesFilter?: {
                      /** @description How to use the ranking to select time series that pass through the filter. */
                      direction?: string;
                      /**
                       * Format: int32
                       * @description How many time series to allow to pass through the filter.
                       */
                      numTimeSeries?: number;
                      /** @description `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
                      rankingMethod?: string;
                    };
                    /** @description Apply a second aggregation after the ratio is computed. */
                    secondaryAggregation?: {
                      /** @description The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data. */
                      alignmentPeriod?: string;
                      /** @description The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series. */
                      crossSeriesReducer?: string;
                      /** @description The set of fields to preserve when `cross_series_reducer` is specified. */
                      groupByFields?: string[];
                      /** @description An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period. */
                      perSeriesAligner?: string;
                    };
                  };
                  /** @description A query used to fetch time series with MQL. */
                  timeSeriesQueryLanguage?: string;
                  /** @description The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`. */
                  unitOverride?: string;
                };
              }[];
              /** @description Threshold lines drawn horizontally across the chart. */
              thresholds?: {
                /** @description The state color for this threshold. Color is not allowed in a XyChart. */
                color?: string;
                /** @description The direction for the current threshold. Direction is not allowed in a XyChart. */
                direction?: string;
                /** @description A label for the threshold. */
                label?: string;
                /** @description The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
                targetAxis?: string;
                /**
                 * Format: double
                 * @description The value of the threshold. The value should be defined in the native scale of the metric.
                 */
                value?: number;
              }[];
              /** @description The duration used to display a comparison chart. */
              timeshiftDuration?: string;
              /** @description The properties applied to the x-axis. */
              xAxis?: {
                /** @description The label of the axis. */
                label?: string;
                /** @description The axis scale. By default, a linear scale is used. */
                scale?: string;
              };
              /** @description The properties applied to the y2-axis. */
              y2Axis?: {
                /** @description The label of the axis. */
                label?: string;
                /** @description The axis scale. By default, a linear scale is used. */
                scale?: string;
              };
              /** @description The properties applied to the y-axis. */
              yAxis?: {
                /** @description The label of the axis. */
                label?: string;
                /** @description The axis scale. By default, a linear scale is used. */
                scale?: string;
              };
            };
          }[];
        }[];
      };
    };
    status?: {
      /** @description Conditions represent the latest available observations of the MonitoringDashboard's current state. */
      conditions?: {
        /** @description Last time the condition transitioned from one status to another. */
        lastTransitionTime?: string;
        /** @description Human-readable message indicating details about last transition. */
        message?: string;
        /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
        reason?: string;
        /** @description Status is the status of the condition. Can be True, False, Unknown. */
        status?: string;
        /** @description Type is the type of the condition. */
        type?: string;
      }[];
      /** @description \`etag\` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. */
      etag?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
    };
  };
}

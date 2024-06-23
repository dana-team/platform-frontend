export interface ICapp {
  annotations: { key: string; value: string }[];
  labels: { key: string; value: string }[];
  spec: object;
  status: object;
}

export interface ICappSpec {
  ScaleMetric: string;
  Site: string;
  State: string;
  ConfigurationSpec: object;
  RouteSpec: object;
  LogSpec: object;
  VolumeSpec: object;
}

export interface ICappResponse {
  capp: ICappData;
}

export interface ICappData {
  metadata: { name: string };
  source: string;
  deployment?: string;
}

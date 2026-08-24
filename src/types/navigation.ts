export interface NavigationChild {
  label: string;
  path: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationChild[];
}
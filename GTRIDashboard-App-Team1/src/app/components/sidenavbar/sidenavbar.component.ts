import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface NavigationNode {
  icon: string;
  name: string;
  path: string;
  children?: NavigationNode[];
}

const TREE_DATA: NavigationNode[] = [
  {
    icon: "dashboard", name: 'Dashboard', path: "",
    children: [
      {icon: "", name: 'Devices', path: "devices'"},
      {icon: "", name: 'Software Catalog', path: ""},
      {icon: "", name: 'Accessories', path:""}],
  },
  {
    icon: "desktop_windows", name: 'Asset Management', path: "",
    children: [
    {icon: "", name: 'Assets', path: "'"},
    {icon: "", name: 'Licenses', path: ""},
    {icon: "", name: 'License Compliance', path:""}],

  },
  {
    icon: "list_alt", name: 'Distribution', path: "",
    children: [
    {icon: "", name: 'Managed Installations', path: ""},
    {icon: "", name: 'Task Chains', path: ""},
    {icon: "", name: 'Alerts', path:""}],
  },

  {
    icon: "description", name: 'Scripting', path: "",
    children: [
    {icon: "", name: 'Scripts', path: ""},
    {icon: "", name: 'Run Now', path: ""},
    {icon: "", name: 'Accessories', path:""}],

  },
  {
    icon: "lock", name: 'Security', path: "",
    children: [
    {icon: "", name: 'Patch Management', path: ""},
    {icon: "", name: 'Windows Feature Updates', path: ""}],
  },
  {
    icon: "headset_mic", name: 'Service desk', path: "",
    children: [
    {icon: "", name: 'Tickets', path: ""},
    {icon: "", name: 'Knowledge Base', path: ""},
    {icon: "", name: 'Announcements', path:""},
    {icon: "", name: 'Configuration', path:""},
  ],

  },
  {
    icon: "bug_report", name: 'Reporting', path: "",
    children: [
    {icon: "", name: 'Reporting', path: ""},
    {icon: "", name: 'Report Schedules', path: ""},
    {icon: "", name: 'Notifications', path:""}],

  },
  {
    icon: "settings", name: 'Settings', path: "",
    children: [
    {icon: "", name: 'Control Panel', path: ""},
    {icon: "", name: 'Users', path: ""},
    {icon: "", name: 'Accounts', path:""},
    {icon: "", name: 'Roles', path: ""},
    {icon: "", name: 'Logs', path: ""},
    {icon: "", name: 'Support', path:""}],
  },
];
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavbarComponent  {
  treeControl = new NestedTreeControl<NavigationNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NavigationNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: NavigationNode) => !!node.children && node.children.length > 0;
}


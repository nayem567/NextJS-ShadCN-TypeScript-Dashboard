import SidebarHeaderLogo from "./SidebarHeaderLogo";
import SidebarAppMenu from "./SidebarAppMenu";
import SidebarCollapsibleGroup from "./SidebarCollapsibleGroup";
import SidebarNestedMenu from "./SidebarNestedMenu";
import SidebarFooterMenu from "./SidebarFooterMenu";
import { Sidebar, SidebarContent, SidebarSeparator } from "./ui/sidebar";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeaderLogo />
      <SidebarSeparator />
      <SidebarContent className="py-4">
        <SidebarAppMenu />
        <SidebarCollapsibleGroup />
        <SidebarNestedMenu />
      </SidebarContent>
      <SidebarFooterMenu />
    </Sidebar>
  );
};

export default AppSidebar;

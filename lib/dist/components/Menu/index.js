import Menu from './menu';
import SubMemu from './subMenu';
import MenuItem from './menuItem';
var transMenu = Menu;
transMenu.Item = MenuItem;
transMenu.SubMemu = SubMemu;
export default transMenu;

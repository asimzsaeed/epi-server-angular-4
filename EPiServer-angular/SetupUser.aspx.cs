using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EPiServer_angular
{
    public partial class SetupUser : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //var users = System.Web.Security.Membership.GetAllUsers();
            //var userList = new List<MembershipUser>();
            //foreach (MembershipUser user in users)
            //{
            //    System.Web.Security.Membership.DeleteUser(user.UserName, true);
            //}
           
            //var roles = System.Web.Security.Roles.GetAllRoles();
            //foreach (var role in roles)
            //{
            //    System.Web.Security.Roles.DeleteRole(role);
            //}

            //System.Web.Security.Membership.CreateUser("admin", "password99", "admin@example.com");
            //System.Web.Security.Roles.CreateRole("WebAdmins");
            //System.Web.Security.Roles.AddUserToRole("admin", "WebAdmins");

        }
    }
}
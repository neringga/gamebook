using System.Collections.Generic;
using System.Linq;
using gamebook_back.Models;

namespace gamebook_back.Handlers
{
    public interface ILoginHandler
    {
        bool IsRegisteredUser(User user);
    }

    public class LoginHandler : ILoginHandler
    {
        private List<User> users = new List<User>();

        LoginHandler()
        {
            var user = new User();
            user.Username = "admin";
            user.Password = "admin";
            users.Add(user);
        }

        public bool IsRegisteredUser(User user)
        {
            if (users.Count(x => x.Username == user.Username && x.Password == user.Password) > 0)
            {
                return true;
            }

            return false;
        }

    }
}
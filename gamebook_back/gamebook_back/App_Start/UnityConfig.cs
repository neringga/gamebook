using System.Web.Mvc;
using gamebook_back.Handlers;
using Unity;
using Unity.Mvc5;

namespace gamebook_back
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<ILoginHandler, LoginHandler>();
            
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}
using System.Web.Http;

namespace TodoListApp.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // Этот код меняет формат результата запроса на json
            // config.Formatters.JsonFormatter.SupportedMediaTypes
            //       .Add(new MediaTypeHeaderValue("text/html"));
        }
    }
}

using Microsoft.AspNetCore.Builder;
using web_back_realtime_communication.ws.Middlewares;

namespace web_back_realtime_communication.ws.Extensions
{
    public static class WebsocketEchoMiddlewareExtension
    {
        public static IApplicationBuilder UseWebsocketEchoMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<WebsocketEchoMiddleware>();
        }
    }
}

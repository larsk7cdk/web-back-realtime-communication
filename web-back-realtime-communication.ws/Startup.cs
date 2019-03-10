using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using web_back_realtime_communication.ws.Extensions;

namespace web_back_realtime_communication.ws
{
    public class Startup
    {
        // https://gunnarpeipman.com/aspnet/aspnet-core-websocket-chat/
        // https://radu-matei.com/blog/aspnet-core-websockets-middleware/

        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }

            app.UseStaticFiles();
            app.UseWebSockets();

            app.UseWebsocketEchoMiddleware();
        }
    }
}

# Runtime Micro-frontends using SSI

Install nginx

```
$ brew install nginx
```

Start nginx

```
$ nginx
```

Stop nginx

```
$ nginx -s stop
```

Your Nginx configuration file will be located at `/usr/local/etc/nginx/nginx.conf`

Try below command to run a test configuration just to verify the location.

```
nginx -t
```

OR

```
nginx -V
```

for more details.

you can open file in editor and lets start by changing default port from 8080 to 9999

```
code /usr/local/etc/nginx/nginx.conf

```

change to

```
    server {
        listen       9999;
        server_name  localhost;
        ...
```

further make necessary changes to setup redirection and dynamic SSI

## Ref

- [https://www.nginx.com/resources/wiki/start/topics/examples/dynamic_ssi/](https://www.nginx.com/resources/wiki/start/topics/examples/dynamic_ssi/)
- [https://martinfowler.com/articles/micro-frontends.html](https://martinfowler.com/articles/micro-frontends.html
- [https://en.wikipedia.org/wiki/Server_Side_Includes](https://en.wikipedia.org/wiki/Server_Side_Includes)

Happy coding!

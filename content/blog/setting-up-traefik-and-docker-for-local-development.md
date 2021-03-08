---
title: Setting up Traefik and Docker for local development
description: This setup is inspired by laravel valet. In short you create a laravel application ,laravel new my-app and you can go straight to my-app.test in your browser and it works.How can we archieve the same for our docker infrustructure using traefik? It's quite easy, for this we will need traefik and coredns. We would want to start a docker nginx and be able to access it at nginx.lo
slug: setting-up-traefik-and-docker-for-local-development
---

This setup is inspired by laravel valet. In short you create a laravel application ,
laravel new my-app and you can go straight to my-app.test in your browser and it works.

How can we archieve the same for our docker infrustructure using traefik? It's quite easy, for this we will need traefik and coredns. We would want to start a docker nginx and be able to access it at nginx.lo

 - Traefik - LoadBalancer and Reverse proxy
 - Coredns - DNS resolver

## Installing Traefik

```yaml

---
version: "3.5"

networks:
  local:
    name: local
    driver: bridge
    ipam:
      config:
        - subnet: "172.30.0.0/16"
    
services:
  traefik:
    container_name: traefik
    command: --loglevel=TRACE
    image: traefik:2.3
    restart: always
    ports:
      - 4001:80
      - 4000:8080
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./config/traefik/traefik.yml:/traefik.yml
      - ./config/traefik/traefik-config.yml:/traefik-config.yml
    labels:
      - "traefik.http.routers.treafik.rule=Host(`traefik.lo`)"
      - "traefik.http.services.traefik.loadbalancer.server.port=8080"
      - "traefik.enable=true"
    networks:
      local:
        ipv4_address: 172.30.1.1


```

Config

```yaml
## traefik.yml
entryPoints:
  http:
    address: ":80"
# Docker configuration backend
providers:
  docker:
    defaultRule: Host(`{{ normalize .Name }}.lo`)
  file:
    filename: "/traefik-config.yml"
    watch: true

# API and dashboard configuration
api:
  insecure: true
ping: {}

log:
  level: info

```

Start traefik

```bash
docker-compose up -d treafik
```

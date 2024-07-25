import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const codespaceName = process.env['CODESPACE_NAME'];
const codespaceDomain = process.env['GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN'];
const hmrPort = 5173;
const hmrRemoteHost = codespaceName ? `${codespaceName}-${hmrPort}.${codespaceDomain}` : 'localhost';
const hmrRemotePort = codespaceName ? 443 : hmrPort;
const hmrRemoteProtocol = codespaceName ? 'wss' : 'ws';

export default defineConfig({
    plugins: [
        react()
    ],
    server: {
        hmr: {
            protocol: hmrRemoteProtocol,
            host: hmrRemoteHost,
            port: hmrPort,
            clientPort: hmrRemotePort
        }
    },
    assetsInclude: ['**/*.glb'],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                sparum: 'sparum/index.html',
                sparumOffice: 'sparum-office/index.html'
            }
        }
    }
});
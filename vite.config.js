import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function logoApiPlugin() {
  return {
    name: 'logo-api',
    configureServer(server) {
      server.middlewares.use('/api/logo', (req, res) => {
        const logoPath = path.resolve('src/assets/estiramiento.png')
        if (!fs.existsSync(logoPath)) {
          res.statusCode = 404
          res.end('Not found')
          return
        }
        res.setHeader('Content-Type', 'image/png')
        fs.createReadStream(logoPath).pipe(res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), logoApiPlugin()],
})

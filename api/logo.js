import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const logoPath = path.join(process.cwd(), 'src', 'assets', 'estiramiento.png')

  if (!fs.existsSync(logoPath)) {
    res.status(404).json({ error: 'Logo not found' })
    return
  }

  res.setHeader('Content-Type', 'image/png')
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
  fs.createReadStream(logoPath).pipe(res)
}

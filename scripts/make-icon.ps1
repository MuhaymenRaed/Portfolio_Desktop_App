Add-Type -AssemblyName System.Drawing

$size = 256
$bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

# Purple background
$g.Clear([System.Drawing.Color]::FromArgb(255, 124, 58, 237))

# White M
$font = New-Object System.Drawing.Font("Arial", 140, [System.Drawing.FontStyle]::Bold)
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center
$rect = New-Object System.Drawing.RectangleF(0, 0, $size, $size)
$g.DrawString("M", $font, [System.Drawing.Brushes]::White, $rect, $sf)
$g.Dispose()

# Save PNG to memory
$ms = New-Object System.IO.MemoryStream
$bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
$pngBytes = $ms.ToArray()
$ms.Close()
$bmp.Dispose()

# Write ICO wrapping the PNG (PNG-ICO format, supported since Windows Vista)
$iconPath = Join-Path $PSScriptRoot "..\src\assets\icon.ico"
$fs = [System.IO.File]::Open($iconPath, [System.IO.FileMode]::Create)
$ico = New-Object System.IO.BinaryWriter($fs)

# ICONDIR header (6 bytes)
$ico.Write([uint16]0)   # reserved
$ico.Write([uint16]1)   # type = 1 (ICO)
$ico.Write([uint16]1)   # count = 1 image

# ICONDIRENTRY (16 bytes)
$ico.Write([byte]0)           # width 0 = 256
$ico.Write([byte]0)           # height 0 = 256
$ico.Write([byte]0)           # color count
$ico.Write([byte]0)           # reserved
$ico.Write([uint16]1)         # planes
$ico.Write([uint16]32)        # bit count
$ico.Write([uint32]$pngBytes.Length)
$ico.Write([uint32]22)        # image data offset: 6 + 16 = 22

# PNG data
$ico.Write($pngBytes)
$ico.Close()
$fs.Close()

Write-Host "icon.ico created at $iconPath ($($pngBytes.Length) bytes PNG)"

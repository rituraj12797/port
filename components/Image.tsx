import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: ImageProps) => {
  if (typeof src === 'string' && (src.startsWith('http') || src.startsWith('/'))) {
    return <NextImage src={src} {...rest} />
  }
  return <NextImage src={`${basePath || ''}${src}`} {...rest} />
}

export default Image
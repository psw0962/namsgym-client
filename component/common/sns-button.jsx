import Image from 'next/image';
import ImageWrapper from './image-wrapper';

const SnsButton = ({ src, url, alt }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" alt={alt}>
      <ImageWrapper width={6} height={6}>
        <Image
          src={src}
          alt={alt}
          priority={true}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </ImageWrapper>
    </a>
  );
};

export default SnsButton;

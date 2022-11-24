import Image from 'next/image';
import ImageWrapper from './image-wrapper';

const SnsButton = ({ src, url, alt }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <ImageWrapper width={6} height={6}>
        <Image src={src} alt={alt} priority={true} />
      </ImageWrapper>
    </a>
  );
};

export default SnsButton;

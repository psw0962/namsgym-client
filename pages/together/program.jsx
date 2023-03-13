import { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';

const Program = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(JSON.parse(window.sessionStorage.getItem('program')));
  }, []);

  return (
    <div>
      {item?.map(x => {
        return (
          <>
            <ImageWrapper width={40} height={40}>
              <Image
                className="program"
                src={x?.image}
                alt={x?.name}
                priority={true}
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                width={180}
                height={200}
              />
            </ImageWrapper>
          </>
        );
      })}
    </div>
  );
};

export default Program;

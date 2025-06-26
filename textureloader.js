import { useTexture, useKTX2 } from '@react-three/drei';

const AdaptiveTexture = ({ src }) => {
  const isWebGLAvailable = useDetectGPU().tier > 1;
  const ktx2Src = src.replace(/\.[^/.]+$/, '.ktx2');
  
  const texture = isWebGLAvailable 
    ? useKTX2(ktx2Src)
    : useTexture(src.replace(/\.[^/.]+$/, '.webp'));

  return <meshStandardMaterial map={texture} />;
};
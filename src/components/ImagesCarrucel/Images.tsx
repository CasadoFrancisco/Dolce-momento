import styled from 'styled-components';

type ImageProps = {
  src: string;
};

const Image = styled.img<ImageProps>`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

export default Image;

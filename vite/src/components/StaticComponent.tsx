import { memo } from 'react';

const AnchorTagComponent = memo(
  ({
    name,
    href,
    targetBlank
  }: {
    name: string;
    href: string;
    targetBlank?: boolean;
  }) => {
    return (
      <a
        href={href}
        target={targetBlank ? '_blank' : undefined}
        rel="noopener noreferrer">
        {name}
      </a>
    );
  }
);

export default function StaticComponent() {
  return (
    <>
      <h1>Static Component</h1>

      <ul
        data-testid="ul"
        style={{ listStyleType: 'square' }}>
        <li>
          <AnchorTagComponent
            targetBlank
            name="리액트"
            href="https://reactjs.org"
          />
        </li>
        <li>
          <AnchorTagComponent
            targetBlank
            name="네이버"
            href="https://www.naver.com"
          />
        </li>
        <li>
          <AnchorTagComponent
            name="구글"
            href="https://www.google.co.kr"
          />
        </li>
      </ul>
    </>
  );
}

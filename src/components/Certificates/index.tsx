import React, { ReactElement } from "react";

import { CertificatImg } from "../../ui";

import { ICertificat } from "../../models";

import styles from "./Certificates.module.scss";

const certificates: ICertificat[] = [
  {
    id: 1,
    imgUrl: "/images/cer-js.webp",
    alt: "My certificate of completion of the course on JavaScript",
  },
  {
    id: 2,
    imgUrl: "/images/cer-ts.webp",
    alt: "My certificate of completion of the course on TypeScript",
  },
  {
    id: 3,
    imgUrl: "/images/cer-react.webp",
    alt: "My certificate of completion of the course on ReactJS Library",
  },
  {
    id: 4,
    imgUrl: "/images/cer-func.webp",
    alt: "My certificate of completion of the course on functions in JavaScript",
  },
];

const Certificates: React.FC = () => {
  return (
    <ul className={styles.certificates}>
      {certificates.map(
        (item: ICertificat, index: number): ReactElement => (
          <CertificatImg
            key={item.id}
            imgUrl={item.imgUrl}
            indexAnim={index + 1}
            alt={item.alt}
          />
        )
      )}
    </ul>
  );
};

export default Certificates;

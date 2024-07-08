import React, { ReactElement } from "react";

import { CertificatImg } from "../../ui";

import styles from "./Certificates.module.scss";

import { ICertificat } from "../../models";

const certificates: ICertificat[] = [
  {
    id: 1,
    imgUrl: "/src/assets/images/cer-ts.webp",
    alt: "My certificate of completion of the course on TypeScript",
  },
  {
    id: 2,
    imgUrl: "/src/assets/images/cer-react.webp",
    alt: "My certificate of completion of the course on ReactJS Library",
  },
  {
    id: 3,
    imgUrl: "/src/assets/images/cer-func.webp",
    alt: "My certificate of completion of the course on functions in JavaScript",
  },
];

const Certificates: React.FC = () => {
  return (
    <ul className={styles.certificates}>
      {certificates.map(
        (item: ICertificat): ReactElement => (
          <CertificatImg key={item.id} certificat={item} />
        )
      )}
    </ul>
  );
};

export default Certificates;

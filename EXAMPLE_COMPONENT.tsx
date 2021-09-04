import React, { FC } from 'react';

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => <h1>{title}</h1>;

export default Title;

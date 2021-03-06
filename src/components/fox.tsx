import { h } from "preact";

type PropType = {
  name: string;
};

const Fox = ({ name }: PropType) => (
  <div className="fox">
    <h5>{name}</h5>
    <p>This page is all about {name}.</p>
  </div>
);

export { Fox };

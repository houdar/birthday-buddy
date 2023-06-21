export const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{age}</p>
    </div>
  );
};
export default Person;

export default function List() {
  const arr = ["Hello", "Hie"];

  function Student(name, age) {
    this.name = name;
    this.age = age;
  }

  let s1 = new Student("Rohit", 22);
  let s2 = new Student("Sanmay", 21);
  let student = [s1, s2];
  return (
    <>
      <div>
        {arr.map((val, key) => (
          <div key={key}>
            <h1>{val}</h1>
          </div>
        ))}

        {student.map((s, key) => (
          <div key={key}>
            <h2>{s.name}</h2>
            <h2>{s.age}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

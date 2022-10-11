export default function TextArea({id, placeholder = "placeholder" ,value}) {

  return <textarea id={id} rows="1" value={value} name="name-txta"></textarea>;
}

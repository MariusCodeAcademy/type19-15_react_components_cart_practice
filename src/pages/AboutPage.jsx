export default function AboutPage() {
  return (
    <div className='container text-center'>
      <h1 className='about-heading text-4xl font-bold text-center mt-10'>About</h1>
      <img className='border p-4 h-52 inline-block' src='/person_6.jpg' alt='town' />

      <p className='text-lg text-center mt-4'>
        This is a demo app to showcase <strong>React</strong> and <strong>React Router</strong> in
        action.
      </p>
    </div>
  );
}

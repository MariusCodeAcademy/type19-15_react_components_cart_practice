export default function HomePage() {
  return (
    <div className='container'>
      <h1 className='about-heading text-4xl font-bold text-center mt-10'>Home</h1>
      <p className='text-lg text-center mt-4'>
        Welcome to our app! This is the homepage where you can find information about our amazing
        features and services. Explore our website to discover more and get started on your journey
        with us. We are excited to have you here!
      </p>
      <img className='border p-4 ' src='/newyork.jpg' alt='town' />
    </div>
  );
}

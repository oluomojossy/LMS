import HeaderComponent from "./Header";

export default function MainArea({ children }) {
  return (
    <>
      <section className="main__area flex-1 flex flex-col">
        <HeaderComponent />
        <div className="main_area__inner container p-7 mx-auto">
          {children}
        </div>
      </section>
    </>
  );
}

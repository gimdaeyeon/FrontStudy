const MyBlogLayOut = ({children}) => {
  return (
    <>
        <LayOutHeader/>
          {children}
        <LayOutFooter/>
    </>
  );
};

export default MyBlogLayOut;
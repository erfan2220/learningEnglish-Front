
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const res = await axiosInstance.get("/api/courses/");
  //       setCourses(res.data);
  //       console.log("courses from backend", res.data);
  //     } catch (error) {
  //       console.error("fetching error", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);
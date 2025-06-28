import React from "react";
import Button from "../Button/Button";

import Layout from "../Layout/Layout";

const SignIn = () => {
  return (
    <div className="p-6 md:p-12 max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <Layout>
          <form>
            <Button type="button" label={"start now"} />
          </form>
        </Layout>
      </div>
    </div>
  );
};

export default SignIn;

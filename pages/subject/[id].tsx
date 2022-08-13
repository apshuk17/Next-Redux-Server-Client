import React from "react";
import { useAppSelector } from "../../app/hooks";
import { wrapper } from "../../store/store";
import { fetchSubject } from "../../store/subject";

const SubjectId = ({ id }: { id: string }) => {
  const subject = useAppSelector((state) => state.subject);
  return <div>SubjectId {id}</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const id = params?.id;

      await store.dispatch(fetchSubject(id));

    //   console.log("State on server", store.getState());

      return {
        props: {
          id,
        },
      };
    }
);

export default SubjectId;

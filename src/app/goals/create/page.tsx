import { createGoal } from "@/app/actions";
import { SubmitButton } from "@/components/SubmitButton";

function Create() {
  return (
    <>
      <div>create</div>
      <form action={createGoal}>
        {/* <input type="hidden" name="userId" value={userId} /> */}
        <label>
          title:
          <input type="text" name="title" />
        </label>
        <label>
          description:
          <textarea name="description" />
        </label>
        <SubmitButton />
      </form>
    </>
  );
}

export default Create;

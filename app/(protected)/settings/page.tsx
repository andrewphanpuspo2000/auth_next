import { auth, signOut } from "@/auth";

export default async function SettingPage() {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <button
        onClick={async () => {
          "use server";
          await signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

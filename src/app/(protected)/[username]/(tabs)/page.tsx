import { Posts } from '@/components/Posts';
import { getProfile } from '../getProfile';
import { CreatePostModalLauncher } from '@/components/CreatePostModalLauncher';
import { getServerUser } from '@/lib/getServerUser';

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  const profile = await getProfile(params.username);
  return {
    title: profile?.name || 'Surreal',
  };
}

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const [user] = await getServerUser();
  const profile = await getProfile(params.username);
  const shouldShowCreatePost = user?.id === profile?.id;

  return (
    <div>
      {shouldShowCreatePost && (
        <div className="mt-4">
          <CreatePostModalLauncher />
        </div>
      )}
      {profile && <Posts type="profile" userId={profile.id} />}
    </div>
  );
}

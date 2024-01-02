import { pkgs } from "./prePublish";

pkgs.forEach(async (pkg) => {
  const contents = await Bun.file(
    `${import.meta.dir}/packages/${pkg}/package.json`
  ).json();

  for (const [dependency, version] of Object.entries(
    contents.dependencies as Record<string, string>
  )) {
    if (version == "latest") {
      contents.dependencies[dependency] = "workspace:*";
    }
  }

  await Bun.write(
    `${import.meta.dir}/packages/${pkg}/package.json`,
    JSON.stringify(contents, null, 2)
  );
});

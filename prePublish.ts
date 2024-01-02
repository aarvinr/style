export const pkgs = ["bun", "cli"];

pkgs.forEach(async (pkg) => {
  const contents = await Bun.file(
    `${import.meta.dir}/packages/${pkg}/package.json`
  ).json();

  for (const [dependency, version] of Object.entries(
    contents.dependencies as Record<string, string>
  )) {
    if (version == "workspace:*") {
      contents.dependencies[dependency] = "latest";
    }
  }

  await Bun.write(
    `${import.meta.dir}/packages/${pkg}/package.json`,
    JSON.stringify(contents, null, 2)
  );
});

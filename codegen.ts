import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  generates: {
    "types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        enumValues: {
          MyTestEnum: {
            A: "ValueA",
            B: "ValueB"
          }
        }
      }
    },
  },
};

export default config;

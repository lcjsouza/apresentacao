const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "mfeForm",
    publicPath: "http://localhost:4200/", // URL base para os recursos do MFE
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      name: "mfe", // Nome do projeto MFE
      filename: "remoteEntry.js", // Arquivo remoto compartilhado
      exposes: {
        "./EquilibrioModule": "./src/app/poc-equilibrio/equilibrio/equilibrio.module.ts", // Expondo o módulo Equilibrio
        "./SubscricaoModule": "./src/app/poc-equilibrio/subscricao/subscricao.module.ts", // Expondo o módulo Subscrição
        "./SobreComponent": "./src/app/apresentacao-jr/sobre/sobre.component.ts",
        "./ProjetosComponent": "./src/app/apresentacao-jr/projetos/projetos.component.ts",
        "./FraseComponent": "./src/app/apresentacao-jr/frase/frase.component.ts",
        "./ChatComponent": "./src/app/apresentacao-jr/chat/chat.component.ts",
      },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};

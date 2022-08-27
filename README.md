# Treinamento de typescript

Treinamento básico de typescript.

## Iniciando

Para começar a trabalhar com typescript em um projeto, acessar o diretório do projeto e executar o comando:

`tsc --init`

Isso criará um arquivo de configuração do typescript chamado `tsconfig.json`.

Para gerar o arquivo javascript a partir do arquivo typescript, executar o comando:

`tsc basico.ts`

Este comando criará o arquivo basico.js.

Para não precisar digitar o comando acima a todo momento, podemos utilizar o comando `tsc -w` no diretório raiz, isso fará com que o typescript monitore os arquivos `.ts` e compile para javascript sempre que eles sofrerem alterações.
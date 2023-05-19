import { extendTheme } from "@chakra-ui/react";
 const theme=extendTheme({
    colors:{primary:"#f4364c"},
    components: {
        Button: {
          sizes: {
            sm: {
              fontSize: 'md'
            }
          },
          variants: {
            base: {
              bg: 'yellow.500',
              fontSize: 'md'
             },
            sm: {
              bg: 'teal.500',
              fontSize: 'lg'
             },
            md: {
              bg: 'orange.500',
              fontSize: 'xl'
             },
          }
        },
      }
})
export {theme}
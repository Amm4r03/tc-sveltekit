export async function load({params}) {
    const slug = `${params.slug}` 
    return {
        content : `hello ${slug}`
    }
}
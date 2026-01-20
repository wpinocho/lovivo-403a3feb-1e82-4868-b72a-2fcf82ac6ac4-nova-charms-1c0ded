export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <img 
        src="/logo.png"
        alt="NOVA CHARMS"
        className="h-8 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold font-heading text-foreground">NOVA CHARMS</span>';
        }}
      />
    </a>
  )
}
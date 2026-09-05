import json
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "src" / "data" / "marcas.json"
PUBLIC_DIR = ROOT / "public"


def optimize(public_path: str, max_size: int) -> str:
    source = PUBLIC_DIR / public_path.lstrip("/")
    if not source.exists() or source.suffix.lower() == ".webp":
        return public_path

    target = source.with_suffix(".webp")
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        image.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=82, method=6)

    return "/" + target.relative_to(PUBLIC_DIR).as_posix()


def main() -> None:
    data = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    converted = 0

    for category in data:
        for brand in category.get("marcas", []):
            for product in brand.get("produtos", []):
                for field, max_size in (("imagem", 900), ("descricaoImagem", 1200)):
                    current = product.get(field)
                    if not current:
                        continue
                    optimized = optimize(current, max_size)
                    if optimized != current:
                        product[field] = optimized
                        converted += 1

    DATA_FILE.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"{converted} references converted to WebP")


if __name__ == "__main__":
    main()

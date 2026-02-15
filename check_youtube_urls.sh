#!/bin/bash

echo "Checking YouTube URLs from Achilles Fitness exercises..."
echo "=================================================="

# Array of URLs to check
urls=(
"https://www.youtube.com/watch?v=0AUGkch3tzc"
"https://www.youtube.com/watch?v=0GsVJsS6474"
"https://www.youtube.com/watch?v=0tn5K9NlCfo"
"https://www.youtube.com/watch?v=1fbU_MkV7NE"
"https://www.youtube.com/watch?v=1TlhdiFSJrU"
"https://www.youtube.com/watch?v=1Tq3QdYUuHs"
"https://www.youtube.com/watch?v=2C-uNgKwPLE"
"https://www.youtube.com/watch?v=2-LAMcpzODU"
"https://www.youtube.com/watch?v=2yjwXTZQDDI"
"https://www.youtube.com/watch?v=2z8JmcrW-As"
"https://www.youtube.com/watch?v=3VcKaXpzqRo"
"https://www.youtube.com/watch?v=3VLTzIrnb5g"
"https://www.youtube.com/watch?v=5BvrPOHNkME"
"https://www.youtube.com/watch?v=6SS6K3lAwZ8"
"https://www.youtube.com/watch?v=6Z15_WdXmVw"
"https://www.youtube.com/watch?v=8CR-WckW3LY"
"https://www.youtube.com/watch?v=8iPEnn-ltC8"
"https://www.youtube.com/watch?v=96zJo3nlmHI"
"https://www.youtube.com/watch?v=99TWIhjzXuw"
"https://www.youtube.com/watch?v=9FGilxCbdz8"
"https://www.youtube.com/watch?v=A-cFYWvaHr0"
"https://www.youtube.com/watch?v=ANVdMDaYRts"
"https://www.youtube.com/watch?v=ASdvN_XEl_c"
"https://www.youtube.com/watch?v=bDaIL_zKbGs"
"https://www.youtube.com/watch?v=bEv6CCg2BC8"
"https://www.youtube.com/watch?v=brhRXlOhsAM"
"https://www.youtube.com/watch?v=CAwf7n6Luuc"
"https://www.youtube.com/watch?v=CE8H1DZMDhU"
"https://www.youtube.com/watch?v=cJRVVxmytaM"
"https://www.youtube.com/watch?v=cYKYGwcg0U8"
"https://www.youtube.com/watch?v=d_KZxkY_0cM"
"https://www.youtube.com/watch?v=EA7u4Q_8HQ0"
"https://www.youtube.com/watch?v=eGo4IYlbE5g"
"https://www.youtube.com/watch?v=F_a9Jvg106c"
"https://www.youtube.com/watch?v=fhvQQxi7fZM"
"https://www.youtube.com/watch?v=fIWP-FRFNU0"
"https://www.youtube.com/watch?v=FK4rHfWKEac"
"https://www.youtube.com/watch?v=Fkzk_RqlYig"
"https://www.youtube.com/watch?v=FRzQXeN1hro"
"https://www.youtube.com/watch?v=FWJR5Ve8bnQ"
"https://www.youtube.com/watch?v=gNS_QjGAs_k"
"https://www.youtube.com/watch?v=GZbfZ033f74"
"https://www.youtube.com/watch?v=hbcAUlNwDpk"
"https://www.youtube.com/watch?v=hCMC4Vh2g_s"
"https://www.youtube.com/watch?v=HUXS3S2xSX4"
"https://www.youtube.com/watch?v=IODxDxX7oi4"
"https://www.youtube.com/watch?v=Iwe6AmxVf7o"
"https://www.youtube.com/watch?v=IZxyjW7MPJQ"
"https://www.youtube.com/watch?v=J0DnG1_S92I"
"https://www.youtube.com/watch?v=j3Igk5nyZE4"
"https://www.youtube.com/watch?v=JB2oyawG9KI"
"https://www.youtube.com/watch?v=JbyjNymZOt0"
"https://www.youtube.com/watch?v=jEy_czb3RKA"
"https://www.youtube.com/watch?v=K_ftgRYit5U"
"https://www.youtube.com/watch?v=kkdmHTASZg8"
"https://www.youtube.com/watch?v=KTPABgPK5Kc"
"https://www.youtube.com/watch?v=kwG2ipFRgfo"
"https://www.youtube.com/watch?v=L8fvypPrzzs"
"https://www.youtube.com/watch?v=-M4-G8p8fmc"
"https://www.youtube.com/watch?v=m4ytaCJZpl0"
"https://www.youtube.com/watch?v=MeIiIdhvXT4"
"https://www.youtube.com/watch?v=nmwgirgXLYM"
"https://www.youtube.com/watch?v=nYS0R4c3qCA"
"https://www.youtube.com/watch?v=op9kVnSso6Q"
"https://www.youtube.com/watch?v=ORT4oJ_R8Qs"
"https://www.youtube.com/watch?v=Orxowest56U"
"https://www.youtube.com/watch?v=pcQA61tWqL8"
"https://www.youtube.com/watch?v=Pr1ieGZ5atk"
"https://www.youtube.com/watch?v=pYcpY20QaE8"
"https://www.youtube.com/watch?v=qDcniqddTeE"
"https://www.youtube.com/watch?v=qEwKCR5JCog"
"https://www.youtube.com/watch?v=rep-qVOkqgk"
"https://www.youtube.com/watch?v=rloXYB8M3vU"
"https://www.youtube.com/watch?v=rqiTPdK1c_I"
"https://www.youtube.com/watch?v=rT7DgCr-3pg"
"https://www.youtube.com/watch?v=SEdqd1n0cvg"
"https://www.youtube.com/watch?v=SKPab2YC8BE"
"https://www.youtube.com/watch?v=soxrZlIl35U"
"https://www.youtube.com/watch?v=SrqOu55lrYU"
"https://www.youtube.com/watch?v=-t7fuZ0KhDA"
"https://www.youtube.com/watch?v=taI4XduLpTk"
"https://www.youtube.com/watch?v=tAp2J8tM6kw"
"https://www.youtube.com/watch?v=TU8QYVW0gDU"
"https://www.youtube.com/watch?v=UhgQi_cz5zA"
"https://www.youtube.com/watch?v=um3VVzqunPU"
"https://www.youtube.com/watch?v=uQwelDX1h7Y"
"https://www.youtube.com/watch?v=vByJfI8acOw"
"https://www.youtube.com/watch?v=vKPGe8zb2S4"
"https://www.youtube.com/watch?v=VmB1G1K7v94"
"https://www.youtube.com/watch?v=W3gBdsTzDrk"
"https://www.youtube.com/watch?v=xQNrFHEMhI4"
"https://www.youtube.com/watch?v=xrPteyQLGAo"
"https://www.youtube.com/watch?v=XZV9IwluPjw"
"https://www.youtube.com/watch?v=YbX7Wd8jQ-Q"
"https://www.youtube.com/watch?v=y-wV4Venusw"
"https://www.youtube.com/watch?v=YyvSfVjQeL0"
"https://www.youtube.com/watch?v=-yzbS3Yg74Y"
"https://www.youtube.com/watch?v=z6PJMT2y8GQ"
"https://www.youtube.com/watch?v=zC3nLlEvin4"
"https://www.youtube.com/watch?v=ZYDTJaAM-gE"
)

working_urls=()
broken_urls=()

for url in "${urls[@]}"; do
    echo "Checking: $url"
    
    # Fetch the page and check for common error indicators
    response=$(curl -s -L --user-agent "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" "$url")
    
    # Check if response contains error indicators
    if [[ $response == *"Video unavailable"* ]] || [[ $response == *"This video is private"* ]] || [[ $response == *"This video has been removed"* ]] || [[ $response == *"<title>YouTube</title>"* ]] || [[ -z "$response" ]]; then
        echo "  ❌ BROKEN: $url"
        broken_urls+=("$url")
    else
        echo "  ✅ WORKING: $url"
        working_urls+=("$url")
    fi
    
    # Small delay to be respectful
    sleep 0.5
done

echo ""
echo "=================================================="
echo "RESULTS SUMMARY:"
echo "Total URLs checked: ${#urls[@]}"
echo "Working URLs: ${#working_urls[@]}"
echo "Broken URLs: ${#broken_urls[@]}"

if [ ${#broken_urls[@]} -gt 0 ]; then
    echo ""
    echo "BROKEN URLs that need replacement:"
    for broken_url in "${broken_urls[@]}"; do
        echo "  $broken_url"
    done
fi